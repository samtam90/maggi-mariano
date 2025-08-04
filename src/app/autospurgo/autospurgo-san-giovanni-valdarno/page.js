import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo San Giovanni Valdarno" });
export default withBaseProps({ 
    title: "Autospurgo San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
