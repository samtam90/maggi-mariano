import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Fossato di Vico" });
export default withBaseProps({ 
    title: "Autospurgo Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});
