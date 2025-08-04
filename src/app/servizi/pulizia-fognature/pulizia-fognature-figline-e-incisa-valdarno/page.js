import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Figline e Incisa Valdarno" });
export default withBaseProps({ 
    title: "Pulizia fognature Figline e Incisa Valdarno", 
    locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"}  
});
