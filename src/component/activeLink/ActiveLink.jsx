import React from 'react';

import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn btn-ghost normal-case text-xl bg-orange-300"
                        : isPending
                        ? "btn btn-ghost normal-case text-xl"
                        : "btn btn-ghost normal-case text-xl"
                    }
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;