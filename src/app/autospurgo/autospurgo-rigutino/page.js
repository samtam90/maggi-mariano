import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Rigutino" });
export default withBaseProps({ 
    title: "Autospurgo Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});
