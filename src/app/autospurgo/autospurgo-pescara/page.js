import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pescara",
    canonical: links.autospurgo["pescara"],
});
export default withBaseProps({ 
    title: "Autospurgo Pescara", 
    locationNames: {label: "Pescara", href: "pescara"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["pescara"],
        name: "Pescara",
    }),
});
