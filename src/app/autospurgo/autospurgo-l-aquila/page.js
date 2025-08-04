import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo L'Aquila" });
export default withBaseProps({ 
    title: "Autospurgo L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
