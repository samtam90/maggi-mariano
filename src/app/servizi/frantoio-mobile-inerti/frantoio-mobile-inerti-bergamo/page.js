import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Bergamo" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});
