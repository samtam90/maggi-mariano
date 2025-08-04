import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Figline e Incisa Valdarno",
    canonical: links.autospurgo["figline-e-incisa-valdarno"],
});
export default withBaseProps({ 
    title: "Autospurgo Figline e Incisa Valdarno", 
    locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"}  
});
