import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Rieti",
    canonical: links.autospurgo["rieti"],
});
export default withBaseProps({ 
    title: "Autospurgo Rieti", 
    locationNames: {label: "Rieti", href: "rieti"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["rieti"],
        name: "Rieti",
    }),
});
