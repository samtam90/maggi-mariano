import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Livorno" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
