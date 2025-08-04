import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature San Giovanni Valdarno" });
export default withBaseProps({ 
    title: "Pulizia fognature San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
