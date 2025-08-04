import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cerreto di Spoleto" });
export default withBaseProps({ 
    title: "Autospurgo Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});
