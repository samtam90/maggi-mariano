import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Greve in Chianti" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"}  
});
