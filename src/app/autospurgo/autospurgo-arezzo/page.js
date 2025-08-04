import appConfig, { links } from "../../../../app.config";
import { makeNavGridItems } from "../../../misc/functions";
import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import comuni from "../../../../.data/comuni/arezzo.json";

export const metadata = getMetadata({
  title: "Autospurgo Arezzo",
  canonical: links.autospurgo.arezzo,
});
export default withBaseProps({
  title: "Autospurgo Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.autospurgo),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> effettuiamo il
        servizio di autospurgo in tutti i comuni della provincia di Arezzo:
      </span>
    ),
  },
});
