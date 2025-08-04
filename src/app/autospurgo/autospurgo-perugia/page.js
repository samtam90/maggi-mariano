import appConfig from "../../../../app.config";
import { makeNavGridItems } from "../../../misc/functions";
import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import comuni from "../../../../.data/comuni/perugia.json";

export const metadata = getMetadata({ title: "Autospurgo Perugia" });
export default withBaseProps({
  title: "Autospurgo Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.autospurgo),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> effettuiamo il
        servizio di autospurgo in tutti i comuni della provincia di Perugia:
      </span>
    ),
  },
});
