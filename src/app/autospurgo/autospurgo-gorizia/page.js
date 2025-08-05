import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Gorizia",
    canonical: links.autospurgo["gorizia"],
});
export default withBaseProps({ 
    title: "Autospurgo Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["gorizia"],
        name: "Gorizia",
    }),
});
