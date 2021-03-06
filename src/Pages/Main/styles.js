import styled from 'styled-components';

import headerBackground from '../../assets/images/reno4-slider-bg.png';
import aboutPhoto from '../../assets/images/reno4-smallbg-1.png';

import callUsPhoto from '../../assets/images/reno4-reno-guys.png';

export const Container = styled.div`
  header {
  background-image: url('${headerBackground}');
    background-size: cover 0;
    background-repeat: no-repeat;
    background-position: 50% 0rem;
    width: 100%;
    height: 75rem;

    .header-content{
      width: 38%;
      padding-top: 20rem;

      h1{
        font-size: 6rem;
      }

      p {
        font-size: 1.8rem;
        line-height: 2rem;
        color: #666;
        margin: 3rem 0;
      }

      &__footer{
        display: flex;
        align-items: center;
        border-top: 2px solid #ccc;
        margin: 3rem 0;
        padding: 3rem 0;
        p {
          margin: 0;
          font-size: 1.3rem;
          margin-right: 5rem;
        }
        div{
          display: flex;

        }
        &--icon{
          width: 5rem;
          height: 5rem;
          background-color: #F2F2F2;
          border-radius: 50%;
          margin-right: 1rem;
        }
      }
    }
  }

  .about{
    display: flex;
    align-items: center;
    height: 80vh;
    margin: 10rem 0;
    position: relative;

    &__image{
      height: 100%;
      z-index: 5;
      position: relative;
      left: 2rem;

    }

    &__content{
      width: 80%;
      padding: 5% 5% 0 5%;
      background-color: #FFD800;
      height: 100%;

      h2 {
        font-size: 2.5rem;
      }

      p {
        font-size: 2rem;
        margin: 4rem 0;
      }
    }

    &__photo {
      background-image: url('${aboutPhoto}');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;
      height: 35%;
      width: 20%;
      position: absolute;
      bottom: 0;
      right: 3%;
    }
  }

  .services {
    margin: 10rem 0;

    &__title {
      font-size: 3rem;
    }

    &__card-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__card{
      width: 30%;

      img {
        width: 60%;
        margin: 5rem 0 2rem 0;
      }

      h3 {
        font-size: 2rem;
        margin: 1rem 0;
      }

      p {
        font-size: 1.5rem;
        line-height: 1.5;
      }


      &--prices {
        font-weight: bold;
        margin: 2rem 0 4em 0;

        span {
          border-bottom: 2px solid #FFD800;
        }
      }
    }

    &__footer{
      width: 100%;
      border-top: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 3rem;

      p {
        margin-right: 4rem;
      }
    }
  }

  .call-us {
    margin: 10rem 0 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__icon {
      margin-right: 4rem;
      background-image: url("${callUsPhoto}");
      width: 30%;
      height: 40rem;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &__content {

      span {
        font-weight: bold;
      }

      h3 {
        font-size: 3rem;
        margin: 1rem 0;
      }

      &--icons  {
        margin: 5rem 0;
        display: flex;
        div {
          margin-right: 2rem;
          display: flex;
          img {
            width: 5rem;
            margin-right: 2rem;
          }
        }
      }
    }
  }

  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      text-align: center;
      font-size: 3rem;
    }

    &__modal {
      display: flex;
      overflow: auto;
      margin: 4rem 0;

      img {
        margin: 0 1rem;
        width: 50%;
      }
    }

    &__text {
      text-align: center;
      font-size: 1.8rem;
      margin-top: 2rem;
    }
  }
`;
