import { links } from "../../../../app.config";
import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Autospurgo Foiano in Valdichiana",
  canonical: links.autospurgo["foiano-della-chiana"],
});
export default withBaseProps({
  title: "Autospurgo Foiano in Valdichiana",
  locationNames: {
    label: "Foiano in Valdichiana",
    href: "foiano-in-valdichiana",
  },
});
