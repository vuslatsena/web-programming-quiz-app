import React, {Component} from 'react';

class Counter extends Component {

    state = {
        value: 0
    };
    //Sayaç değerini increase ettirmek için oluşturduğumuz fonksiyon
    increase = () => {
        //prev => önceki state durumuna göre 1 azaltıyor.
        this.setState(prev=>({value:prev.value+1}))
        this.props.containerIncrease();
    }
    //Sayaç değerini decrease ettirmek için oluşturduğumuz fonksiyon
    decrease = () => {
        this.setState(prev=>({value:prev.value-1}))
        this.props.containerDecrease();
    }
    render() {
        /*
        Yerel sayaç değeri state içinde tutulmaktadır ve this.state ile erişim sağlayabilirsiniz.
        Global sayaç ise bu component'te property olarak gönderilmektedir ve this.props ile erişim sağlanabilir.
        Propery olarak gönderilen değerler yalnızca okunabilirler ve değişiklik doğrudan gerçekleşemez.
        Değişiklik yapmak için state değiştiren bir fonksiyonun tetiklenmesi gerekmektedir.
        Parent componenta ait state'i değiştiren bir fonksiyonun tetiklenmesi ile değişiklik gerçekleştirilmektedir.
         */
        return (
            <div>
                <div>Container value: {this.props.containerValue}</div>
                <div>Counter value: {this.state.value}</div>
                <div className="btn" onClick={this.increase}>+</div>
                <div className="btn" onClick={this.decrease}>-</div>
            </div>
        );
    }
}

export default Counter;