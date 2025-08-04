import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Ascoli Piceno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});