import React, {FC} from "react";
import classes from "./MainPage.module.scss"
import about from '../../static/about.json'
import ProjectsBlock from "../../components/ProjectsBlock/ProjectsBlock";

const MainPage:FC = () => {
    return (
        <div className={"container-internal " + classes.mainPage}>
            <p className={"text " + classes.mainPage__summary}>{about.summary}</p>
            <ProjectsBlock type="short"/>   
            <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex, non vel, aliquam cupiditate nemo beatae pariatur et illum repellendus perspiciatis veniam mollitia odit numquam maxime. Iusto dolores nostrum in.
                Veritatis quaerat optio ut corporis itaque? Accusamus nulla illum non natus distinctio nam rem expedita excepturi quasi eius repellat, repellendus magnam voluptas? Enim minima at eius nam? Nihil, veniam sapiente.
                Facilis in corporis eaque nemo esse aut ad aperiam obcaecati quidem, nobis non itaque distinctio natus odio maiores consectetur similique provident sequi odit tempora inventore sed cupiditate assumenda aliquid? Autem.
                Corporis nobis non ullam architecto consectetur veniam maiores reprehenderit veritatis repellat nam asperiores possimus, fugit natus aliquam reiciendis minus doloribus saepe a harum dolore. Cumque beatae dolorem aliquam voluptate totam.
                Ab totam nam blanditiis in cupiditate placeat unde, quis quod neque aperiam quae saepe harum fugiat aut eum provident rem vel fugit laudantium doloribus labore eos id. Ipsum, dolorem hic?
                Quia quas nihil dolorum quam laboriosam nulla maiores suscipit blanditiis doloribus at laudantium, corporis, illo neque eius qui, aliquid sequi aliquam earum expedita optio porro minima voluptatem deleniti. Aliquid, ab!
                Ducimus assumenda sunt rem consectetur eius quidem, perferendis dolorum, repellat maiores, id alias! Iusto itaque neque adipisci repudiandae dolorum aliquam delectus reiciendis, rem libero eaque tempore accusamus non, sit atque?
                Error magni ipsa sit doloremque non eligendi, odio sequi blanditiis? Perspiciatis natus eligendi dolores est hic ipsum quae voluptates, libero quis ipsam at, dicta ullam, dolore officia nobis non modi.
                At quibusdam, dicta accusamus vero vitae quasi laudantium laboriosam provident cum et cupiditate hic dolore quas incidunt! Dignissimos voluptatem voluptatum aspernatur illum, fugit itaque explicabo consectetur officia laborum? In, tenetur?
                Eveniet, aliquid! Eum dolorum perspiciatis non ab, voluptas harum deserunt accusantium quisquam repudiandae odit excepturi blanditiis a illum sapiente maiores autem architecto aperiam voluptates saepe rerum quo ad reiciendis? Voluptatum!
            </div>
        </div>
    )
}

export default MainPage;