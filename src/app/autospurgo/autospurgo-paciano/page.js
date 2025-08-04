import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Paciano" });
export default withBaseProps({ 
    title: "Autospurgo Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});
