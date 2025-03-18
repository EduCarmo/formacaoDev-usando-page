import Pagina from "@/components/Pagina";
import textos from "@/data/textos";
import { useRouter } from "next/router";

export default function PaginaSaudacao() {

    const router = useRouter()

    const locale = router.locale as string

    return (
        <Pagina>
            <div>
                {locale in textos ? textos[locale as "pt" | "en"].saudacao : textos.pt.saudacao}
            </div>
        </Pagina>
    )
}