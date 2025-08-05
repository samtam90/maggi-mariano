import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pergine Valdarno",
  canonical: links.servizi["pulizia-fognature"]["pergine-valdarno"],
});
export default withBaseProps({
  title: "Pulizia fognature Pergine Valdarno",
  locationNames: { label: "Pergine Valdarno", href: "pergine-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
