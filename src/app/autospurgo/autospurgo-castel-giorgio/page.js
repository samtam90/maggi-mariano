import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel Giorgio",
    canonical: links.autospurgo["castel-giorgio"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel Giorgio", 
    locationNames: {label: "Castel Giorgio", href: "castel-giorgio"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
