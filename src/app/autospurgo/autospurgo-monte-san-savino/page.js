import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Monte San Savino" });
export default withBaseProps({ 
    title: "Autospurgo Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});
