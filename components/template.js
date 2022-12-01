export default {
    render() {
        return `
            ${this.css({})}
            ${this.html()}
        `
    },
    html() {
        return `
        <div class="container">
            <div class="left">
                <h3>Avatar</h3>
                <div class="avatar-bgk">
            
                    <div class="avatar-hair">
                        <img src="./assets/Hair/Crazy.svg">
                    </div>

                    <div class="avatar-hair2">
                        <img src="./assets/Hair/Long.svg">
                    </div>



                    <div class="avatar-glasses">
                        <img src="./assets/Glasses/Frame.svg">
                    </div>

                    <div class="avatar-glasses2">
                    <img src="./assets/Glasses/Sunnies.svg">
                </div>

                    <div class="avatar-brows">
                        <img src="./assets/Brows/Round.svg">
                    </div>


                    <div class="avatar-brows2">
                        <img src="./assets/Brows/Angry.svg">
                    </div>



                    <div class="avatar-eyes">
                        <img src="./assets/Eyes/Lashes.svg">
                    </div>


                    <div class="avatar-eyes2">
                        <img src="./assets/Eyes/Normal.svg">
                     </div>



                    <div class="avatar-lips">
                        <img src="./assets/Lips/Lips.svg">
                    </div>


                    <div class="avatar-lips2">
                    <img src="./assets/Lips/Smile.svg">
                    </div>




                    <div class="avatar-head">
                        <img src="./assets/Head.svg">
                    </div>



                    <div class="avatar-body">
                        <img src="./assets/Body/Plain.svg">
                    </div>
                    <div class="avatar-body2">
                        <img src="./assets/Body/Necklace.svg">
                    </div>
                    <div class="avatar-body3">
                        <img src="./assets/Body/Sweater.svg">
                    </div>
                </div>
            </div>



            
            <div class="right">
                    <h3>Choose your variant</h3>

                    <div class="right__choose-part">
                        <div class="body">
                            <h4>Body</h4>
                            <button class="btn-body"></button>
                            <button class="btn-body2"></button>
                        </div>

                        <div class="hair">
                            <h4>Hair</h4>
                            <button class="btn-hair"></button>
                            <button class="btn-hair2"></button>
                        </div>

                        <div class="eyes">
                            <h4>Eyes</h4>
                            <button class="btn-eyes"></button>
                            <button class="btn-eyes2"></button>
                        </div>

                        <div class="lips">
                            <h4>Lips</h4>
                            <button class="btn-lips"></button>
                            <button class="btn-lips2"></button>
                        </div>

                        <div class="brows">
                            <h4>Brows</h4>
                            <button class="btn-brows"></button>
                            <button class="btn-brows2"></button>
                        </div>

                        <div class="glasses">
                            <h4>Glasses</h4>
                            <button class="btn-glasses"></button>
                            <button class="btn-glasses2"></button>
                        </div>

                    </div>
            </div>
        <div>
        `
    },
    css() {
        return `
        <style>
        * {
        box-sizing: border-box;
        }      
        body{
            margin: 0;
            padding: 0;
        }
        .container{
            color: black;
            font-size:20px;
            font-family: sans-serif;
            display: flex;
            height:100vh;
        }
        .left{
            display: flex;
            flex-direction: column;
            flex: 30%;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: lightgrey;
            border-right: 1px solid;

        }
        .right{
            display: flex;
            flex-direction: column;
            flex: 50%;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #FC8F8F;
            border-right: 1px solid;
           
        }
        .right__choose-part{
            display: grid;
            grid-template-columns: repeat(6,1fr);
            gap: 20px;
        }
        .avatar-bgk{
            position: relative;
            display: flex;
            justify-content:center;
            width:440px;
            height:440px;
            background: url("./assets/Rectangle.svg") center / cover no-repeat;
        }
        .avatar-head{
            display: block;
            position: absolute;
            top: 124px;
            width: 157px;
            height: 187px;
        }





        .avatar-hair{
            display: none;
            position: absolute;
            top: 50px;
            width: 257px;
            height: 225px;
            z-index:9999;
        }
        .avatar-hair2{
            display: none;
            position: absolute;
            top: 55px;
            width: 257px;
            height: 225px;
            z-index:999;
        }






        .avatar-glasses, .avatar-glasses2{
            display: none;
            position: absolute;
            top: 190px;
            left:142px;
            width: 84.37px;
            height: 23.8px;
            z-index:200;
        }

        .avatar-brows, .avatar-brows2{
            display: none;
            position: absolute;
            top: 170px;
            left:170px;
            width: 84.37px;
            height: 23.8px;
            z-index:99;
        }


        .avatar-eyes,  .avatar-eyes2 {
            display: none;
            position: absolute;
            top: 190px;
            width: 84.37px;
            height: 23.8px;
            z-index:99;
        }

    

        .avatar-lips, .avatar-lips2{
            display: none;
            position: absolute;
            top: 220px;
            left:170px;
            width: 84.37px;
            height: 23.8px;
            z-index:99;
        }



        .avatar-body{
            display: block;
            position: absolute;
            top: 297px;
            width: 295px;
            height: 216px;
        }
        .avatar-body2{
            display: none;
            position: absolute;
            top: 297px;
            width: 295px;
            height: 216px;
        } 

        .avatar-body3{
            display: none;
            position: absolute;
            top: 297px;
            width: 295px;
            height: 216px;
        }
        .base{
            display: flex;
            flex-direction: column;
            justify-content:center;
            text-align: center;
            align-items: center;
            width: 140px;
            height: 200px;
            padding: 16px;
            background-color: white;
            border-radius: 8px;
        }
        .btn-base{
            width: 80px;
            border: none;
            cursor: pointer;
            height: 100px;
            background: url("./assets/Head.svg") center / cover no-repeat;
        }
        
        
        .body, .hair, .eyes, .lips, .brows, .glasses{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 20px 0 0 0;
            align-items: center;
            width: 140px;
            height: 303px;
            padding: 50px;
            background-color: white;
            border-radius: 8px;
            z-index:9;
        }

        .btn-hair{
            width: 40px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Hair/Crazy.svg") center / cover no-repeat;
        }
        .btn-hair2{
            width: 30px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Hair/Long.svg") center / cover no-repeat;
        }

        .btn-eyes{
            width: 90px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Eyes/Lashes.svg") center / cover no-repeat;
        }
        .btn-eyes2{
            width: 90px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Eyes/Normal.svg") center / cover no-repeat;
        }


        
        .btn-body{
            width: 60px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Body/Sweater.svg") center / cover no-repeat;
        }
        .btn-body2{
            width: 56px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Body/Necklace.svg") center / cover no-repeat;
        }
        
        .btn-lips{
            width: 60px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Lips/Lips.svg") center / cover no-repeat;
        }
        .btn-lips2{
            width: 56px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Lips/Smile.svg") center / cover no-repeat;
        }
        
        .btn-glasses{
            width: 115px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Glasses/Frame.svg") center / cover no-repeat;
        }
        .btn-glasses2{
            width: 115px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Glasses/Sunnies.svg") center / cover no-repeat;
        }

        .btn-brows{
            width: 115px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Brows/Round.svg") center / cover no-repeat;
        }
        .btn-brows2{
            width: 100px;
            border: none;
            cursor: pointer;
            height: 30px;
            background: url("./assets/Brows/Angry.svg") center / cover no-repeat;
        }
        
        
        

        </style>
        `
    }
}