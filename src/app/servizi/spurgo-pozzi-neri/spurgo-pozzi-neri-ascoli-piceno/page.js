import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ascoli Piceno",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});