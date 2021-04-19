executeCallBack = (callback) =>{
    setTimeout(callback,1);
};


blockingSleep = (ms) => {
    ms += new Date().getTime();

    while(new Date().getTime() < ms){}
}

example = () => {
    console.log("A");
//Cpu oyalansın diye yazıldı.
    executeCallBack(()=>{
        console.log("B");
        executeCallBack(()=>{
            console.log("C");
        });

        blockingSleep(100);
        console.log("D");
    });
    blockingSleep(100);//100ms blocklama
    console.log("E");
}

example();

/*
Soru: Hangi sırayla neler yazar?Neden?
    A
    E
    B
    D
    C

A: İlk çalışan
E: Olay döngüsünde (event-loop) callback'ler çağırılmadan önce mevcut fonksiyonun çalışması tamamlanır.
B: example() tamamlandıktan sonra callback fonksiyonlar çağırılır. setTimeout kaç ms sonra işlemin yürütüleceğini
belirten fonksiyondur ancak işlemin 1 ms sonra yürütüleceğini garanti etmemektedir. Yalnızca event-loop kuyruğuna 1ms sonra eklenmesini sağlar.
Eğer mevcut görev CPU'daki sonsuz bir döngü ile bloklandıysa bu callback asla çalışmayacaktır.
Bu örnekte 100ms'lik bir bloklamadan sonra callback fonksiyon çalışır ve 1ms beklemeden hemen sonra çalışamaz.
D: E ile aynı sebep
C: son callback fonksiyonun çağırılması

*/