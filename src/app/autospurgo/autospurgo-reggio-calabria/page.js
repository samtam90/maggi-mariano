import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Reggio Calabria" });
export default withBaseProps({ 
    title: "Autospurgo Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});
