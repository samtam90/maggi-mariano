import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Tuoro sul Trasimeno",
    canonical: links.autospurgo["tuoro-sul-trasimeno"],
});
export default withBaseProps({ 
    title: "Autospurgo Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});
