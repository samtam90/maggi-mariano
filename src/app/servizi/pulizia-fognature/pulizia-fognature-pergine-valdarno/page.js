import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Pergine Valdarno" });
export default withBaseProps({ 
    title: "Pulizia fognature Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});
