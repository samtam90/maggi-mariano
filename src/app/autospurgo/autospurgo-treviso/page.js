import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Treviso",
    canonical: links.autospurgo["treviso"],
});
export default withBaseProps({ 
    title: "Autospurgo Treviso", 
    locationNames: {label: "Treviso", href: "treviso"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["treviso"],
        name: "Treviso",
    }),
});
