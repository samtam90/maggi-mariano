import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cerreto di Spoleto",
    canonical: links.autospurgo["cerreto-di-spoleto"],
});
export default withBaseProps({ 
    title: "Autospurgo Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});
