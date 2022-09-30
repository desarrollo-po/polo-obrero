import React from "react";

const UltimasNoticias = () => {
  return <div>UltimasNoticias</div>;
};

export default UltimasNoticias;

export async function getStaticProps() {
  return {
    props: {
      post: "post",
    },
  };
}
