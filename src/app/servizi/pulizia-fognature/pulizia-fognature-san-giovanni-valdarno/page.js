import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Giovanni Valdarno",
  canonical: links.servizi["pulizia-fognature"]["san-giovanni-valdarno"],
});
export default withBaseProps({
  title: "Pulizia fognature San Giovanni Valdarno",
  locationNames: { label: "San Giovanni Valdarno", href: "san-giovanni-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
