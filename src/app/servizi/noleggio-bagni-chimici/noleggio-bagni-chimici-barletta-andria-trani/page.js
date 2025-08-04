import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barletta-Andria-Trani",
  canonical: links.servizi["noleggio-bagni-chimici"]["barletta-andria-trani"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Barletta-Andria-Trani", 
  locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"} 
});
