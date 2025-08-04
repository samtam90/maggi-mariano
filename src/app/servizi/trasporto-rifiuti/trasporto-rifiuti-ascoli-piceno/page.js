import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ascoli Piceno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});