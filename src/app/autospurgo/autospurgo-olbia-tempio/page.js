import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Olbia-Tempio",
    canonical: links.autospurgo["olbia-tempio"],
});
export default withBaseProps({ 
    title: "Autospurgo Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["olbia-tempio"],
        name: "Olbia-Tempio",
    }),
});
