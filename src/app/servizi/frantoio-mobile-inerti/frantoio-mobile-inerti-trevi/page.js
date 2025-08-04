import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Trevi" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});
