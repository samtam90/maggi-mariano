import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Siena" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
