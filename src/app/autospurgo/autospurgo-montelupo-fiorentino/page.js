import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montelupo Fiorentino",
    canonical: links.autospurgo["montelupo-fiorentino"],
});
export default withBaseProps({ 
    title: "Autospurgo Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});
