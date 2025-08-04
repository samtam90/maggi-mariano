import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Padova" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});
