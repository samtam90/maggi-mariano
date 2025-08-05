import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Palermo",
    canonical: links.autospurgo["palermo"],
});
export default withBaseProps({ 
    title: "Autospurgo Palermo", 
    locationNames: {label: "Palermo", href: "palermo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["palermo"],
        name: "Palermo",
    }),
});
