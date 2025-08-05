import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Giovanni Valdarno",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-giovanni-valdarno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Giovanni Valdarno",
  locationNames: { label: "San Giovanni Valdarno", href: "san-giovanni-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
