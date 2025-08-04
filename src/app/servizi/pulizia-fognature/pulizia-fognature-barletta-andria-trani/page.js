import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Barletta-Andria-Trani",
  canonical: links.servizi["pulizia-fognature"]["barletta-andria-trani"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"}  
});
