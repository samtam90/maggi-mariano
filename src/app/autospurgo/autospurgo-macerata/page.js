import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Macerata",
    canonical: links.autospurgo["macerata"],
});
export default withBaseProps({ 
    title: "Autospurgo Macerata", 
    locationNames: {label: "Macerata", href: "macerata"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["macerata"],
        name: "Macerata",
    }),
});
