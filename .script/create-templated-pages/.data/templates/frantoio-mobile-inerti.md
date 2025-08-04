import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti [name]" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
