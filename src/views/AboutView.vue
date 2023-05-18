<template>
  <div class="about">
    <div class="about__container">
      <h1>Sobre nós</h1>
      <div class="about__wrapper" />
      <p>
        A D.Brigadeiros é uma empresa que nasceu da paixão pela culinária e pelo
        sabor irresistível dos brigadeiros, bolos e doces. Fundada por uma
        empreendedora que sempre buscou oferecer produtos de qualidade, a
        empresa tem o objetivo de levar aos seus clientes doces deliciosos e
        únicos, feitos com muito carinho e dedicação.
      </p>
      <p>
        Nossos produtos são preparados com ingredientes selecionados e de alta
        qualidade, resultando em um sabor inigualável e textura perfeita. Além
        disso, nossa produção é artesanal, com muito cuidado e atenção aos
        detalhes, garantindo a excelência em cada uma de nossas criações.
      </p>
      <p>
        Por tudo isso, a D.Brigadeiros se tornou referência em qualidade e
        sabor, conquistando cada vez mais clientes e admiradores. Nosso
        compromisso é continuar oferecendo produtos irresistíveis e um
        atendimento excepcional, para que nossos clientes possam desfrutar do
        melhor que a vida tem a oferecer.
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/scss/main.scss";
.about {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 180px;

  &__wrapper {
    width: 50%;
    background: $yellow-150;
    height: 2px;
    margin: 16px 0 95px;
  }

  &__container {
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 80%;
    text-align: center;
    background: $yellow-100;
    padding: 20px 43px 100px;
    max-width: 1060px;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: $primary;
    }

    p {
      font-size: 1.3rem;
      font-weight: 400;
      color: $secondary;
      margin-bottom: 20px;
    }
  }
}
</style> 