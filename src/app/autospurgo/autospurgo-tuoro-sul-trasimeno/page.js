import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Tuoro sul Trasimeno" });
export default withBaseProps({ 
    title: "Autospurgo Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});
