import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Fermo",
    canonical: links.autospurgo["fermo"],
});
export default withBaseProps({ 
    title: "Autospurgo Fermo", 
    locationNames: {label: "Fermo", href: "fermo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["fermo"],
        name: "Fermo",
    }),
});
