import styled from 'styled-components'

const ContainerMenu = styled.nav`
    background-color: #000;
    width: 100%;
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 20px;
        .logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            img{
                border-radius: 50%;
            }
            a{
                color: #fff;
            }
        }
    }
    @media(min-width: 768px){
     .logo{
        img{
            height: 45px;
            width: 50px;
        }
      }   
     .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        li{
            a{
                color: #fff;
                text-decoration: none;
            }
        }
     }   
    }
`;

export {
    ContainerMenu
}
