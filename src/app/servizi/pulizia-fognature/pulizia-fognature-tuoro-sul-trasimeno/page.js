import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Tuoro sul Trasimeno",
  canonical: links.servizi["pulizia-fognature"]["tuoro-sul-trasimeno"],
});
export default withBaseProps({
  title: "Pulizia fognature Tuoro sul Trasimeno",
  locationNames: { label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
